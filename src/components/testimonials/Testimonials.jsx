import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Taranbeer Singh",
      title: "Senior Developer (USA)",
      img:
      "assets/tarandp.jpg",
        icon: "assets/linkedin.png",
        desc:
        "I really appreciate Satish for helping me in developing my development skills. He has good understanding in many programming language and concepts.",
        link:"https://www.linkedin.com/in/taranbeersingh/",

    },
    {
      id: 2,
      name: "Akshunya",
      title: "Developer (TCS IND)",
      img:
      "assets/ak0dp.jpeg",
      icon: "assets/linkedin.png",
      desc:
      // "I really appreciate Satish for helping me in developing my development skills. He has good understanding in many programming language and concepts.",

      "I started my career as a trainee in TCS during my training period Satish helped me in understanding corporate projects.He has deep understanding of corporate projects.",
      // featured: true,
      link:"https://www.linkedin.com/in/akshunya-688608203/",
    },
    // {
    //   id: 3,
    //   name: "Dikshant Bisht",
    //   title: "MCA Student (NIIT Kalicut,IND)",
    //   img:
    //   "assets/dkdp.jpeg",
    //   icon: "assets/linkedin.png",
    //   desc:
    //     "Few months back i only code in java and not familiar with any other language. Contacted Satish on LinkedIn he is familiar with multiple programming language,framework and experience of corporate world and projects. After few months of classes i started working on real world projects. ",
        
    //     link:"https://www.linkedin.com/in/dikshant-bisht-3a2a01223/",

    // },
    {
      id: 3,
      name: "Dikshant Bisht",
      title: "MCA Student (NIIT Kalicut,IND)",
      img:
      "assets/dkdp.jpeg",
      icon: "assets/linkedin.png",
      desc:
      "Contact Satish on LinkedIn and started my classes and after few months i started working in corporate projects.",

      // "I started my career as a trainee in TCS during my training period Satish helped me in understanding corporate projects.He has deep understanding of corporate projects.",
      // featured: true,
      link:"https://www.linkedin.com/in/dikshant-bisht-3a2a01223/",

    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <a href={d.link}>
              <img  className="right" src={d.icon} alt="" /></a>
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
