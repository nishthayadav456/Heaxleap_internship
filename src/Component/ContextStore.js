import React, { useState, createContext } from "react";

export const Store = createContext();
function ContextStore(props) {
  const [data, setData] = useState([
    {
      id: 1,
      Category: "Sports",
      content: "Sacramento River Cats",
      image:
        "https://s3-alpha-sig.figma.com/img/ceed/8067/dc33760174d3f67737f6e318d0f118ff?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F2XxKQcUNpnjUfqPSEoBDs1fA2T2ynT30pmeBbbJh8ADDuqsounqPy2h5snUTaNLrXmBSn3WLCzp0n2OT-QW-YTvS-z2mJHJ6qjt2YKrUp47e-cjjKeMCUFbLFl1st3rJjLbv0LslNuyK2PcJ7sfJvoojd2jJrTkPwtCe~fh8aXrwNSkOfd6fBp5EH6WVggIjH~17u23Nxit7mJ3gnCJVAFnyCwu7GXicoEtWv3OQ6g4X7r91yeBwHIuSi~KlMIqvE57pklcMv80Q6TC5meP~-Tk70JwQVh9kJFCBf5kGia04Ta-8Jgjo8h6GaYCkbtJuphhniHWXT4dnVFsj7xMmQ__",
      event: "48",
      sport: "Baseball",
    },
    {
      id: 2,
      Category: "Sports",
      content: "Las Vegas Aviators",
      image:
        "https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fnhdy7dQOQtLfNEts8Y48S1XXIo78WTAF8NMCby7P4sjC6OTdliMhF0d0tAj~lmWSrjvqUtg7~AfR9Cu7UzkprB34TEfUwdP17WZw6ak-PHZ5KUq43yWAfJQbKTahlsvrfN9t8YcNsp538gquzN~Q4gOC5DyWALE0EhpvBxb4NimSNiTG4WjdxfSwz5eOHvqWLk57~o3erxXoDjv0quRDx7PvAKyLnzLkW7L-2ivUCwu1QnVd4ZEDQez5aU8Gf0CRrwva7Tsoj5ZuQdw1yBolX9aJ1deMVeCinrZUWkKaLkTntZYMMP5GuIM9pr2sCp3MZiCGDZnwtQBcQwh0gS0TQ__",
      event: "28",
      sport: "Baseball",
    },
    {
      id: 3,
      Category: "Sports",
      content: "New Jersey Devils",
      image:
        "https://s3-alpha-sig.figma.com/img/b290/2f7a/b2fcf21c696811f745109da24a740d73?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SL2NyvBA-RmV9CySCr0HqaIDFJPJfx24z5ukOpUhta6I9GYXc65jVXyjYdWiNUOcTOt2pbLQb2rK1ME8yx1Xkvvw14syZfWGf9I-Bx~7rNiIGN4EetaP9GdAdoJpMJP2cYcwI2HwhG5p4P~LHqFKou0RO~ZEZcMOPJxJct8ini~YOjXlxwbDdvfk6v8UGdmtaXuR43hC36YWrAdNVcfWnkNY3LrxnefSV6pJmr6-M9fOwGOpWFqWE08XG9YjfexBZQmEM7MLfm338bYXaIXLtAwQGvnhqrrmwCl4wHPPc95mDocM14BBhj8aUaDvPMpBAWUKhw2OYXVoUBbvcNditw__",
      event: "15",
      sport: "Ice Hockey",
    },
    {
      id: 4,
      Category: "Sports",
      content: "Las Vegas Aviators",
      image:
        "https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fnhdy7dQOQtLfNEts8Y48S1XXIo78WTAF8NMCby7P4sjC6OTdliMhF0d0tAj~lmWSrjvqUtg7~AfR9Cu7UzkprB34TEfUwdP17WZw6ak-PHZ5KUq43yWAfJQbKTahlsvrfN9t8YcNsp538gquzN~Q4gOC5DyWALE0EhpvBxb4NimSNiTG4WjdxfSwz5eOHvqWLk57~o3erxXoDjv0quRDx7PvAKyLnzLkW7L-2ivUCwu1QnVd4ZEDQez5aU8Gf0CRrwva7Tsoj5ZuQdw1yBolX9aJ1deMVeCinrZUWkKaLkTntZYMMP5GuIM9pr2sCp3MZiCGDZnwtQBcQwh0gS0TQ__",
      event: "28",
      sport: "Baseball",
    },
    {
      id: 5,
      Category: "Sports",
      content: "Advertisment title",
      image:
        "https://th.bing.com/th/id/OIP.6dOfQ7XRxUvVhrb9D0bc6gAAAA?rs=1&pid=ImgDetMain",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      Category: "Sports",
      content: "Las Vegas Aviators",
      image:
        "https://internship-project-henna.vercel.app/ticket-mockup-3@2x.png",
      name: "Las Vegas ballpark,Las Vegas, Nevada",
      heading: "Take Flight Collection",
    },
    {
      id: 7,
      Category: "Sports",
      content: "Sacramento River Cats",
      image: "https://internship-project-henna.vercel.app/unnamed-1@2x.png",
      name: "Sutter Health Park,Sacramento,california",
      heading: "Orange Collection",
    },
    {
      id: 8,
      Category: "Sports",
      content: "Las Vegas Aviators",
      image:
        "https://internship-project-henna.vercel.app/ticket-mockup-3@2x.png",
      name: "Las Vegas ballpark,Las Vegas, Nevada",
      heading: "Take Flight Collection",
    },
  ]);
  return (
    <div>
      <Store.Provider value={[data, setData]}>{props.children}</Store.Provider>
    </div>
  );
}

export default ContextStore;
