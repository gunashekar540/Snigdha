
# Job Portal - Frontend

# GitHub Repository: [Job Portal - Frontend](https://github.com/RavipatiPoornaChandrika/jobportal---frontend)

# What’s Working
 - **Job Dashboard:** Users can view a list of all available job postings.

- **Job Details Page:** Clicking on a job listing will show more details about that job.

 - **Add Job Feature:** Admins or employers can create and post new job listings by filling out a form with job title, company, location, salary, and description.

# What’s Missing
- **Backend Integration:** The application does not currently connect to a backend API. This means that job data is not dynamically fetched or stored. In its current state, the data is static.

- **Job Editing:** There is no functionality to edit existing job listings. Users cannot modify any job post once it is created.

- **Form Validation:** The job creation form lacks proper validation. This means that users can submit the form with missing or incorrect information.

- **Authentication & Authorization:** There is no user login or role-based access control. Currently, anyone can post a job. Ideally, this feature would restrict job posting to authorized users, like admins or employers.

- **Search and Filters:** There's no search or filter functionality to make it easier for users to find specific jobs based on criteria like location or salary range.

# How Would I Complete It with More Time?
- **Backend Integration:** Connect the frontend with a backend API to dynamically fetch and store job data. This would allow job listings to be created, updated, and deleted from a database.

- **Job Editing:** Implement the ability for admins or employers to edit existing job listings. The job form can be prefilled with the current job details, allowing users to make changes and update the job post.

- **Form Validation:** Use a library like React Hook Form or Zod to add validation to the job creation form. This will ensure that users provide all the necessary information and that it’s in the correct format.

- **Authentication & Authorization:** Implement user authentication using JWT or Firebase to ensure that only authorized users (e.g., admins or employers) can post, edit, or delete jobs. This would help restrict job creation and management to appropriate users.

- **Search & Filter Functionality:** Add a search bar and filters so users can easily find jobs based on job title, company name, location, or salary range.

- **Styling and UI Enhancements:** Improve the design and user experience (UX) of the site, making it more responsive and visually appealing. This could involve adding components like a navbar, better form inputs, and using CSS frameworks like Tailwind CSS to make the UI cleaner and more modern.

- **Deployment:** Once everything is working, the app can be deployed to a platform like Vercel or Netlify for public access. This would make the job portal accessible from anywhere.
