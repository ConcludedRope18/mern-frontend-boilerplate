import React from "react";
import "./home.css";
import Wrapper from "../../components/Layout/Wrapper/wrapper";

const Home = () => {
    return (
        <Wrapper>
            <div className="home-content">
                <h1>Business Management Dashboard</h1>
                <div className="welcome-message">
                    Welcome to your financial control center
                </div>
            </div>
        </Wrapper>
    );
};

export default Home;