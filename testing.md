## Testing part
### _Code Validation_
The Afghansphere site has been passed through the W3C CSS Validator .

* **W3C CSS Validation Results:**
 No errors or warnings were found when the code was passed through the W3C CSS Validation checker.
  
  ![W3C CSS](docs/images/w3c.PNG)



Here's an updated version of your manual testing documentation tailored for an AfghanSPere app:

---

### _Manual Testing_

In addition to the automated tests, I conducted the following manual tests to verify all user story scenarios:

#### **Authentication - User Logged Out**
1. The user cannot access the following URLs; they are redirected to the Home page:
   - Create Post Page
   - Edit Post Page
   - Edit Profile Page

2. **Sign In/Sign Up Page**
   - Desktop users can see an image next to the Sign In/Sign Up form.
   - Mobile and tablet users cannot see an image next to the Sign In/Sign Up form.

3. **Navigation Bar**
   - Logged-out users cannot access the following links:
     - Profile
     - Sign Out

#### **Post Component - Logged In**
- Users can create a post.
- Users can upload an image.
- Users can change the uploaded image.
- Users can like a post.
- Users can leave a comment.
- Users can edit/delete their own posts.

#### **Profiles - Logged In**
- Users can view other users' profiles by clicking on their avatars.
- Users can edit their own profiles.
- Users can change their username.
- Users can set a new password.

#### **Following/Unfollowing - Logged In**
- Users can follow other users.
- Users can unfollow other users.

### **Further Testing Scenarios**
- **Error Handling**: Confirm that relevant error messages appear for unsuccessful actions (e.g., issues with post creation or image uploads).
- **Responsiveness**: Ensure that all components adapt properly and operate smoothly across different screen sizes.
- **Accessibility**: Validate that the app complies with accessibility guidelines (e.g., keyboard navigation and screen reader support).
- **Performance**: Assess the loading times of different pages and components, particularly during peak usage.

---

You can modify any specific details to better align with the features and functionalities of your AfghanSPere app!


### _Responsiveness Testing_
The responsive design tests were carried out manually throughout the build using [https://ui.dev/amiresponsive]. I based the main design around a desktop view, as this is primarily a browser based platform, although I have added responsive design for tablet and mobile devices as well.

Here are the results:

*  _Desktop View_
    ![Desktop View](docs/images/hpmepage.PNG)

*  _Tablet View_
    ![Tablet View](docs/images/tablet.PNG)

*  _Mobile View_

    ![Mobile View](docs/images/phone.PNG)


### _Lighthouse Testing_
Google Lighthouse in Chrome Developer Tools was used to test the application within the areas of Performance, Accessibility, Best Practices and SEO.

![Lighthouse Report](docs/images/ligthouse.PNG)
