import React, { Component } from "react";

class Header extends Component
{
    render()
    {
        return(
<div>
            <header>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-3">
  <div class="container-fluid">
    <div class="navbar-header">
    <a class="navbar-brand" href="#"><i class="fa fa-github"></i> SCP - React application</a>
      </div>
</div>
</nav>

</header>
</div>

        );
    }
}

export default Header;