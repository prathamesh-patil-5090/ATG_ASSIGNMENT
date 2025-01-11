import React from "react";
import Card from "./Card";
import "./css/Feed.css";
import article1 from "../atg_icons/Rectangle5-2.png";
import education from "../atg_icons/Rectangle5.png";
import meetup from "../atg_icons/Rectangle5-1.png";
import authorImg1 from "../atg_icons/Rectangle3-4.png";
import authorImg2 from "../atg_icons/Rectangle3-1.png";
import authorImg3 from "../atg_icons/Rectangle3-2.png";
import authorImg4 from "../atg_icons/Rectangle3-3.png";
import PencilIcon from './icons/PencilIcon';
import useWindowWidth from "../hooks/useWindowWidth"; 

const Feed = () => {
  const isMobile = useWindowWidth();  

  const posts = [
    {
      type: "Article",
      image: article1,
      title: "What if famous brands had regular fonts? Meet RegularBrands!",
      description: "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
      author: {
        name: "Sarthak Kamra",
        image: authorImg1
      },
      views: "1.4k",
    },
    {
      type: "Education",
      image: education,
      title: "Tax Benefits for Investment under National Pension Scheme",
      description: "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
      author: {
        name: "Sarah West",
        image: authorImg2
      },
      views: "1.4k",
    },
    {
      type: "Meetup",
      image: meetup,
      title: "Finance & Investment Elite Social Mixer @Luijazui",
      description: "Fri, 12 Oct, 2018",
      location: "Ahmedabad, India",  
      author: {
        name: "Ronal Jones",
        image: authorImg3
      },
      views: "1.4k",
      action: true,
      buttonText: "Visit Website",
    },
    {
      type: "Job",
      image: null,
      title: "Software Developer",
      description: "Invocareer Analytics Private Ltd.",
      location: "Noida, India",
      author: {
        name: "Joseph Gray",
        image: authorImg4
      },
      views: "1.4k",
      action: true,
      buttonText: "Apply on TimesJobs",
    },
  ];

  return (
    <div className="feed">
      {posts.map((post, index) => (
        <Card key={index} {...post} />
      ))}
      {isMobile && (
        <button className="mobile-write-button" aria-label="Write post">
          <PencilIcon />
        </button>
      )}
    </div>
  );
};

export default Feed;
