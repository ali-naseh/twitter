import React from "react";

import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={classes.about}>
      <div className={classes.right}>
        <h2>About</h2>
        <p>
          number of units Rich Text HTML Copy Lorem ipsum dolor sit amet
          consectetur adipiscing elit luctus sollicitudin cum, fermentum
          senectus a montes donec nec mattis sed. Justo ridiculus dictum ac urna
          aliquet hendrerit netus enim, id semper vulputate iaculis dui mi
          pellentesque. Elementum habitant ante diam non at semper facilisi
          vestibulum, suspendisse integer mauris tempor id sagittis phasellus in
          ac, commodo vivamus eu pulvinar blandit magna egestas.
        </p>
      </div>
      <div className={classes.left}>
        <div className={classes.feature}>
          <img src={"images/post.png"} alt="" />
          <div>
            <h3>Post</h3>
            <p>
              Primis magnis egestas sociosqu quisque felis lectus massa varius,
              sem rhoncus fermentum class litora inceptos vestibulum, ridiculus
              auctor nascetur quam neque condimentum scelerisque. Laoreet nulla
              hac imperdiet fermentum risus quisque scelerisque, neque morbi sed
              faucibus fusce molestie cras, libero odio himenaeos et curabitur
              ultrices. Enim feugiat malesuada bibendum lacus cubilia habitant
              dignissim, magna in felis aliquet fermentum phasellus blandit
              vulputate, litora risus integer curae neque laoreet.
            </p>
          </div>
        </div>
        <div className={classes.feature}>
          <img src={"images/read.png"} alt="" />
          <div>
            <h3>Read</h3>
            <p>
              Dui torquent elementum erat in neque commodo auctor mus netus, vel
              pellentesque donec facilisis enim ut id nullam nibh parturient,
              habitant phasellus cras ad tempor egestas mattis suscipit. Varius
              tincidunt ultricies class aliquam quam est, fusce placerat at
              morbi nisi, a consequat nibh fames mattis. Risus nascetur quam
              eget gravida ac justo arcu, faucibus sollicitudin velit facilisi
              dignissim sapien, pulvinar lacus venenatis nostra turpis sociis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
