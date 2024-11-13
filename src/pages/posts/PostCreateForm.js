import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png"; // Import the upload image
import VideoIcon from "../../assets/video.png"; // Import the video icon
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function PostCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
    video: "", // Store video file
    is_public: true,
  });
  const { title, content, image, video, is_public } = postData;

  const imageInput = useRef(null);
  const videoInput = useRef(null); // Reference for video input
  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      if (image) URL.revokeObjectURL(image); // Revoke the previous object URL
      const newImageUrl = URL.createObjectURL(event.target.files[0]);
      setPostData({
        ...postData,
        image: newImageUrl, // Create a URL for the selected image
        video: "", // Clear video when an image is selected
      });
    }
  };

  const handleChangeVideo = (event) => {
    if (event.target.files.length) {
      if (video) URL.revokeObjectURL(video); // Revoke the previous object URL
      const newVideoUrl = URL.createObjectURL(event.target.files[0]);
      setPostData({
        ...postData,
        video: newVideoUrl, // Create a URL for the selected video
        image: "", // Clear image when a video is selected
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (imageInput.current.files[0]) {
      formData.append("image", imageInput.current.files[0]); // Append the image file
    }
    if (videoInput.current.files[0]) {
      formData.append("video", videoInput.current.files[0]); // Append the video file
    }
    formData.append("is_public", is_public);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Visibility</Form.Label>
        <Form.Check
          type="radio"
          label="Public"
          name="is_public"
          checked={is_public}
          onChange={() => setPostData({ ...postData, is_public: true })}
        />
        <Form.Check
          type="radio"
          label="Private"
          name="is_public"
          checked={!is_public}
          onChange={() => setPostData({ ...postData, is_public: false })}
        />
      </Form.Group>

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit} encType="multipart/form-data">
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
                disabled={!!video} // Disable image upload if a video is selected
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            {/* Video Upload Section */}
            <Form.Group className="text-center">
              {video ? (
                <>
                  <video className={appStyles.Video} controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="video-upload"
                    >
                      Change the video
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label htmlFor="video-upload">
                  <Asset
                    src={VideoIcon} // Use video icon for video upload prompt
                    message="Click or tap to upload a video"
                  />
                </Form.Label>
              )}
              <Form.File
                id="video-upload"
                accept="video/*"
                onChange={handleChangeVideo}
                ref={videoInput}
                disabled={!!image} // Disable video upload if an image is selected
              />
              {video && <p>Video ready for upload: {videoInput.current?.files[0]?.name}</p>} {/* Show video name if selected */}
            </Form.Group>
            {errors?.video?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;