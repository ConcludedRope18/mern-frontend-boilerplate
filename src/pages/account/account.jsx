import React from "react";
import Wrapper from "../../components/Layout/Wrapper/wrapper";
import Card from "../../components/Common/Card/card";
import Button from "../../components/Common/Button/simple_button";
import Pfp from "../../components/Common/Pfp/pfp";

const Account = () => {
    const user = {
      name: "John Doe",
      id: "user123",
      balance: 1825.75,
      isLoggedIn: true,
      imageUrl: "src/assets/placeholder_pfp.png"
    };
  
    const handleAction = () => {
      if (user.isLoggedIn) {
        console.log("Logging out...");
      } else {
        console.log("Redirect to login/register...");
      }
    };
  
    return (
      <Wrapper>
        <div className="account-center-wrapper">
          <div className="account-card">
            <Pfp imageUrl={user.imageUrl} size="5rem" />
            <h2 className="account-name">{user.name}</h2>
            <p className="account-id">@{user.id}</p>
            <p className="account-balance">{user.balance.toFixed(2)} RON</p>
            <Button
              label={user.isLoggedIn ? "Logout" : "Login / Register"}
              onClick={handleAction}
            />
          </div>
        </div>
      </Wrapper>
    );
  };
  
  export default Account;