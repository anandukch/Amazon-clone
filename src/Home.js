import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2020/Hobby_store/Hero/Version2/1500x600._CB410085967_.png"
          alt=""
        />

        <div className="home__row">
          <Product
            title="lap"
            price="22"
            image="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=774&q=80"
          />
          <Product
            title="airpod"
            price="125"
            image="https://images.unsplash.com/photo-1525825691042-e14d9042fc70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80"
          />
          <Product
            title="canon"
            price="45"
            image="https://images.unsplash.com/photo-1499696786230-3ebd9d0d6fd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          />
          <Product
            title="alexa"
            price="55"
            image="https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
          />
        </div>
        <div className="home__row">
          <Product
            title="samsung"
            price="123"
            image="https://images.unsplash.com/photo-1591122947157-26bad3a117d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          />
          <Product
            title="iphone"
            price="456"
            image="https://images.unsplash.com/photo-1574678301308-b6a9d8c33635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80"
          />

          {/*Product*/}
          {/*Product*/}
          {/*Product*/}
        </div>
        <div className="home__row">
          <Product
            title="macbook"
            price="456"
            image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=926&q=80"
          />

          {/*Product*/}
          {/*Product*/}
        </div>
      </div>
    </div>
  );
}

export default Home;
