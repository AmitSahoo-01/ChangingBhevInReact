import React from 'react'

const Navbar = (props) => {
    function changeTheme(){
        console.log(props)
        props.setTheme("Dark");
    }
  return (
    <div>
        {props.theme}
        <button onClick={changeTheme} >Change</button>
    </div>
  )
}

export default Navbar