import React, { useState } from "react";
import "./FAQ.css";
function FAQ() {
  // if you want to add more questions just add another false here or vice versa
  const [open, setOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  //function to check which faq is opened
  const clickHandler = (e) => {
    const num = e.target.dataset.num;
    setOpen((prev) => {
      let arr = [...prev];
      let newArr = arr.map((elem, index) => {
        if (index == num) {
          return !elem;
        } else {
          return elem;
        }
      });
      return newArr;
    });
  };
  return (
    <div className="faq">
      <h1>FAQ</h1>
      <div className="faq-div">
        <div className="faq-q-div">
          <div
            data-num={0}
            onClick={clickHandler}
            className={`faq-btn ${open[0] ? "border-radius" : ""}`}
          >
            <p className={`${open[0] ? "active-btn" : ""}`}>
              Why We’re Building EPOH Lounge Club
            </p>
            <span className={`arrow2 ${open[0] ? "active2" : ""}`}></span>
          </div>
          <div className={`faq-answer ${open[0] ? "active" : ""}`}>
            <p className="answer">
              The mission and purpose behind this project is to equip our club
              members with the resources and support that they need to truly
              change their lives for the better. We are reverse engineering
              HOPE.
            </p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={1}
            onClick={clickHandler}
            className={`faq-btn ${open[1] ? "border-radius" : ""}`}
          >
            <p className={`${open[1] ? "active-btn" : ""}`}>
              How We're Doing It
            </p>
            <span className={`arrow2 ${open[1] ? "active2" : ""}`}></span>
          </div>
          <div className={`faq-answer ${open[1] ? "active" : ""}`}>
            <p className="answer">
              Each aspect of the ELC warrants its own explanation. It’s not just
              a timeshare based in Austin Texas. Our current business is in
              Texas so that’s where we’re beginning, but it has potential to
              grow all over the nation and potentially the world. ELC also isn’t
              just an NFT asset: it’s a membership pass into an exclusive,
              driven community, as well as a ticket for access to stay in
              high-end physical listings for no cost* to holders. And finally,
              it’s an interactive community committed to helping each other
              build successful, thriving businesses. It’s a new take on the
              American Dream.
            </p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={2}
            onClick={clickHandler}
            className={`faq-btn ${open[2] ? "border-radius" : ""}`}
          >
            <p className={`${open[2] ? "active-btn" : ""}`}>
              What’s the Presale mint price?
            </p>
            <span className={`arrow2 ${open[2] ? "active2" : ""}`}></span>
          </div>
          <div className={`faq-answer ${open[2] ? "active" : ""}`}>
            <p className="answer">Our initial mint price is 0.13 ETH.</p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={3}
            onClick={clickHandler}
            className={`faq-btn ${open[3] ? "border-radius" : ""}`}
          >
            <p className={`${open[3] ? "active-btn" : ""}`}>
              What’s the Public Sale mint price?
            </p>
            <span className={`arrow2 ${open[3] ? "active2" : ""}`}></span>
          </div>
          <div className={`faq-answer ${open[3] ? "active" : ""}`}>
            <p className="answer">Our public sale mint price is 0.16 ETH.</p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={4}
            onClick={clickHandler}
            className={`faq-btn ${open[4] ? "border-radius" : ""}`}
          >
            <p className={`${open[4] ? "active-btn" : ""}`}>When mint?</p>
            <span className={`arrow2 ${open[4] ? "active2" : ""}`}></span>
          </div>
          <div className={`faq-answer ${open[4] ? "active" : ""}`}>
            <p className="answer">
              Pre-sale: March 7th <br /> Public Sale: March 8th <br /> Reveal:
              March 10th
            </p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={5}
            onClick={clickHandler}
            className={`faq-btn ${open[5] ? "border-radius" : ""}`}
          >
            <p className={`${open[5] ? "active-btn" : ""}`}>
              What are Secondary Royalties?
            </p>
            <span className={`arrow2 ${open[5] ? "active2" : ""}`}></span>
          </div>
          <div className={`faq-answer ${open[5] ? "active" : ""}`}>
            <p className="answer">5%</p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={6}
            onClick={clickHandler}
            className={`faq-btn ${open[6] ? "border-radius" : ""}`}
          >
            <p className={`${open[6] ? "active-btn" : ""}`}>
              Which blockchain is it on?
            </p>
            <span className={`arrow2 ${open[6] ? "active2" : ""}`}></span>
          </div>
          <div className={`faq-answer ${open[6] ? "active" : ""}`}>
            <p className="answer">
              ELC tokens are stored as ERC-721 tokens on the Ethereum blockchain
              and hosted on IPFS to imprint the signature of ownership on the
              NFTs.
            </p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={7}
            onClick={clickHandler}
            className={`faq-btn ${open[7] ? "border-radius" : ""}`}
          >
            <p className={`${open[7] ? "active-btn" : ""}`}>
              Are the BnBs real or virtual?
            </p>
            <span className={`arrow2 ${open[7] ? "active2" : ""}`}></span>
          </div>
          <div className={`faq-answer ${open[7] ? "active" : ""}`}>
            <p className="answer">
              They’re real! Members will have access to ELC properties under our
              management. The majority are based in Austin, Texas currently but
              we are constantly expanding. As the Metaverse continues to expand,
              we will become the pioneers of virtual BnB experiences there as
              well, defining what that will look like.
            </p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={8}
            onClick={clickHandler}
            className={`faq-btn ${open[8] ? "border-radius" : ""}`}
          >
            <p className={`${open[8] ? "active-btn" : ""}`}>
              What are the main utility benefits?
            </p>
            <span className={`arrow2 ${open[8] ? "active2" : ""}`}></span>
          </div>
          <div className={`faq-answer ${open[8] ? "active" : ""}`}>
            <p className="answer">
              The three main utilities on launch with this token are: a
              time-share like benefit, exclusive education, and membership from
              owning a crypto asset. We’re constantly adding more benefits for
              our members, including the planned creation of an AirBnB DAO that
              will create passive income generation opportunities and more.
            </p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={9}
            onClick={clickHandler}
            className={`faq-btn ${open[9] ? "border-radius" : ""}`}
          >
            <p className={`${open[9] ? "active-btn" : ""}`}>
              What is the B&B DAO?
            </p>
            <span className={`arrow2 ${open[9] ? "active2" : ""}`}></span>
          </div>
          <div className={`faq-answer ${open[9] ? "active" : ""}`}>
            <p className="answer">
              The main goal of the BnB DAO is to create a network of community
              members and BnB related service providers and decentralize the
              creation and maintenance of BnBs. We will streamline the check-in
              check-out process by creating a B&B protocol and smart contracts.
              These will ensure transparency, provide safety, and protect the
              privacy of our shareholders. This is the next level of smart
              contract and real-world integration and application. Ultimately,
              we want to provide jobs in both the crypto community and in the
              real world, create a community of BnB owners with a place to
              easily list their properties, and make a space where the community
              can readily hire professionals to work with their businesses. The
              DAO will connect a community made up of workers, holders, guests,
              and investors where every stakeholder helps to build the
              first-ever decentralized BnB! This has never been done before.
              It’s not a two-man job and it will take the whole community to
              pull this off, but it has the potential to revolutionize the
              crypto and the BnB industry. Join us in making the world a place
              filled with HOPE!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
