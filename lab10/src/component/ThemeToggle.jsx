import {React, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './redux/themeSlice';



function ThemeToggle() {
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);


  return (
    <div>
        <h1 style={{backgroundColor:"yellow" }}>Toggle Theme</h1>
        <button onClick={()=>dispatch(toggleTheme())}>Dark/Light</button>
    </div>
  )
}

export default ThemeToggle
