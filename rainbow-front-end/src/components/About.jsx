import "../css/Home.css";

const About = () => {
  return (
    <div>
      <div className="hero">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          asperiores fugiat accusantium eum libero amet quibusdam aspernatur
          recusandae veniam vero dolorum, sit, nihil, minima ipsam ad laboriosam
          soluta sequi voluptatibus.
        </h1>
      </div>
      <div className="cardContainer">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h1>How to Create a User</h1>
            </div>
            <div class="flip-card-back">
              <h1>Create</h1>
              <p>
                To create a user, go to the admin page and in the top left
                corner there is a green button that says "add". Once you click
                that it will take you to a form to fill out. The database will
                update create the user with the exact parameters you put in.
                Once you've filled out the formit, click the submit button and
                the user will be in the directory.
              </p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h1>How to Delete a User</h1>
            </div>
            <div class="flip-card-back">
              <h1>Delete</h1>
              <p>
                To delete a user, go to the admin page and find the user you
                would like to delete. If you would like to quickly search for
                user, you can use Control+F(or Command+F on Mac) and enter the
                users first or last name. Once the user is located, simply click
                the "delete" button and confirm your deletion. The directory
                will then be updated with a list of current users.
              </p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h1>How to Search a User</h1>
            </div>
            <div class="flip-card-back">
              <h1>Search</h1>
              <p>
                To search for a user, go to the search page. On the top of the
                search page there is a search bar. Simply type the users last
                name into the search bar. As you type, the cards will be
                eliminated until you get the user matching your search. If there
                is no user with that last name, the screen will remain blank,
                indicating there is no user.
              </p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h1>How to Update a User</h1>
            </div>
            <div class="flip-card-back">
              <h1>Update</h1>
              <p>
                To update a user, go to the admin page and find the user you
                would like to update. If you would like to quickly search for
                user, you can use Control+F(or Command+F on Mac) and enter the
                users first or last name. Once the user is located, simply click the "update" button. Just edit whatever informaton you need to and click submit. The directory will then have the user with the updated information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;