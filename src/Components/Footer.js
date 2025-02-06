// import { HashLink } from 'react-router-hash-link';
// import '../App.css';

// export default function footer() {
//     return <>
//         <div id="footer" className='mb-5 w-100   '>
//             <div id="container"></div>
//             <div id="footer-content">
//                 <img src='assets/logo.png' id='logo' alt='logo' />
//                 <div id="footer-list">
//                     <HashLink id='footer-list-content' className='text-decoration-none' to='/'>HOME</HashLink>
//                     <HashLink id='footer-list-content' className='text-decoration-none' to='/#AboutContainer'>ABOUT</HashLink>
//                     <HashLink id='footer-list-content' className='text-decoration-none' to='/#playerContainer'>PLAYER</HashLink>
//                     <HashLink id='footer-list-content' className='text-decoration-none' to='/#tournamentContainer'>TOURNAMENT</HashLink>
//                     <HashLink id='footer-list-content' className='text-decoration-none' to='/TeamsPage'>TEAM</HashLink>
//                     <HashLink id='footer-list-content' className='text-decoration-none' to='/WithoutTeam'>Player_Without_Team</HashLink>
//                     <HashLink id='footer-list-content' className='text-decoration-none' to='/ContactUs'>CONTACT US</HashLink>
//                 </div>
//                 <div id="social-media">
//                     <svg width="100" id="facebook" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXHashLink="http://www.w3.org/1999/xHashLink">
//                         <path d="M99,50.304C99,22.515 76.621,0 49,0C21.379,0 -1,22.515 -1,50.304C-1,75.412 17.284,96.223 41.188,100L41.188,64.846L28.486,64.846L28.486,50.304L41.188,50.304L41.188,39.221C41.188,26.615 48.647,19.651 60.073,19.651C65.544,19.651 71.266,20.633 71.266,20.633L71.266,33.006L64.96,33.006C58.75,33.006 56.812,36.884 56.812,40.862L56.812,50.304L70.679,50.304L68.462,64.846L56.812,64.846L56.812,100C80.716,96.223 99,75.412 99,50.304Z" fill="#FFFFFF" />
//                     </svg>
//                     <svg width="102" id="instagram" height="100" viewBox="0 0 102 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXHashLink="http://www.w3.org/1999/xHashLink">
//                         <path d="M51.011,24.361C36.823,24.361 25.378,35.808 25.378,50C25.378,64.192 36.823,75.639 51.011,75.639C65.2,75.639 76.644,64.192 76.644,50C76.644,35.808 65.2,24.361 51.011,24.361ZM51.011,66.669C41.842,66.669 34.346,59.193 34.346,50C34.346,40.807 41.82,33.331 51.011,33.331C60.202,33.331 67.676,40.807 67.676,50C67.676,59.193 60.18,66.669 51.011,66.669ZM83.672,23.313C83.672,26.637 80.994,29.293 77.693,29.293C74.369,29.293 71.714,26.615 71.714,23.313C71.714,20.01 74.391,17.332 77.693,17.332C80.994,17.332 83.672,20.01 83.672,23.313ZM100.649,29.382C100.269,21.371 98.44,14.275 92.573,8.429C86.728,2.583 79.634,0.753 71.625,0.351C63.37,-0.117 38.63,-0.117 30.375,0.351C22.389,0.731 15.294,2.561 9.427,8.407C3.56,14.253 1.753,21.349 1.351,29.36C0.883,37.616 0.883,62.362 1.351,70.618C1.731,78.629 3.56,85.725 9.427,91.571C15.294,97.417 22.366,99.247 30.375,99.649C38.63,100.117 63.37,100.117 71.625,99.649C79.634,99.269 86.728,97.439 92.573,91.571C98.418,85.725 100.247,78.629 100.649,70.618C101.117,62.362 101.117,37.638 100.649,29.382ZM89.985,79.477C88.245,83.85 84.876,87.22 80.481,88.982C73.9,91.593 58.284,90.991 51.011,90.991C43.738,90.991 28.1,91.571 21.541,88.982C17.168,87.242 13.8,83.873 12.037,79.477C9.427,72.894 10.03,57.274 10.03,50C10.03,42.726 9.45,27.084 12.037,20.523C13.777,16.15 17.146,12.78 21.541,11.018C28.122,8.407 43.738,9.009 51.011,9.009C58.284,9.009 73.922,8.429 80.481,11.018C84.854,12.758 88.223,16.127 89.985,20.523C92.595,27.106 91.993,42.726 91.993,50C91.993,57.274 92.595,72.916 89.985,79.477Z" fill="#FFFFFF" />
//                     </svg>
//                     <svg width="100" id="whats-app" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXHashLink="http://www.w3.org/1999/xHashLink">
//                         <path d="M84.022,14.531C74.67,5.156 62.214,0 48.978,0C21.656,0 -0.576,22.232 -0.576,49.554C-0.576,58.281 1.701,66.808 6.031,74.33L-1,100L25.272,93.103C32.504,97.054 40.652,99.129 48.955,99.129L48.978,99.129C76.277,99.129 99,76.897 99,49.576C99,36.339 93.375,23.906 84.022,14.531ZM48.978,90.781C41.567,90.781 34.312,88.795 27.996,85.045L26.5,84.152L10.92,88.237L15.071,73.036L14.089,71.473C9.96,64.911 7.795,57.344 7.795,49.554C7.795,26.853 26.277,8.371 49,8.371C60.004,8.371 70.339,12.656 78.107,20.446C85.875,28.237 90.652,38.571 90.629,49.576C90.629,72.299 71.679,90.781 48.978,90.781ZM71.567,59.933C70.339,59.308 64.246,56.317 63.107,55.915C61.969,55.491 61.143,55.29 60.317,56.54C59.491,57.79 57.125,60.558 56.388,61.406C55.674,62.232 74.424,67.924 73.196,67.299C65.92,63.661 41.656,55.223 36.857,46.987C35.585,44.799 38.129,44.955 40.496,40.223C40.897,39.397 40.696,38.683 40.384,38.058C40.071,37.433 37.594,31.339 36.567,28.862C35.562,26.451 34.536,26.786 33.777,26.741C33.062,26.696 32.237,26.696 31.411,26.696C30.585,26.696 29.246,27.009 28.107,28.237C26.969,29.487 23.777,32.478 23.777,38.571C23.777,44.665 28.219,50.558 28.821,51.384C29.446,52.21 37.549,64.71 49.982,70.089C57.839,73.482 60.92,73.772 64.848,73.192C67.237,72.835 72.17,70.201 73.196,67.299C74.223,64.397 74.223,61.92 73.911,61.406C73.621,60.848 72.795,60.536 71.567,59.933Z" fill="#FFFFFF" />
//                     </svg>
//                     <svg width="100" id="call" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXHashLink="http://www.w3.org/1999/xHashLink">
//                         <path d="M96.148,70.664L74.273,61.288C73.338,60.89 72.3,60.806 71.313,61.049C70.327,61.292 69.446,61.849 68.804,62.636L59.116,74.472C43.912,67.304 31.677,55.068 24.508,39.864L36.344,30.176C37.133,29.535 37.691,28.655 37.934,27.668C38.177,26.681 38.092,25.642 37.692,24.708L28.317,2.832C27.878,1.825 27.101,1.003 26.12,0.507C25.14,0.012 24.017,-0.126 22.946,0.117L2.633,4.805C1.6,5.043 0.678,5.625 0.019,6.455C-0.641,7.284 -1,8.313 -1,9.373C-1,59.472 39.606,100 89.627,100C90.687,100.001 91.716,99.642 92.546,98.982C93.377,98.322 93.958,97.4 94.197,96.367L98.885,76.054C99.126,74.978 98.986,73.851 98.486,72.867C97.987,71.883 97.16,71.104 96.148,70.664Z" fill="#FFFFFF" />
//                     </svg>
//                 </div>
//             </div>
//         </div>
//     </>
// }

//=================================================================================

import { HashLink } from 'react-router-hash-link';
import '../App.css';

export default function Footer() {
    return (
    <>

            <div id="footer" className='mb-5 w-100   ' style={{ background: "linear-gradient(90deg,#002366,#ffffff)" }}>
                <div id="container"></div>
                <div id="footer-content">
                    <img src='assets/highlights/cricklinkLogo.jpg' id='logo' alt='logo' />
                    <div id="footer-list">
                        <HashLink id='footer-list-content' className='text-decoration-none' to='/#'>HOME</HashLink>
                        <HashLink id='footer-list-content' className='text-decoration-none' to='/#AboutContainer'>ABOUT</HashLink>
                        <HashLink id='footer-list-content' className='text-decoration-none' to='/#playerContainer'>PLAYER</HashLink>
                        <HashLink id='footer-list-content' className='text-decoration-none' to='/#tournamentContainer'>TOURNAMENT</HashLink>
                        <HashLink id='footer-list-content' className='text-decoration-none' to='/TeamsPage'>TEAM</HashLink>
                        <HashLink id='footer-list-content' className='text-decoration-none' to='/WithoutTeam'>Lone Player</HashLink>
                        <HashLink id='footer-list-content' className='text-decoration-none' to='/ContactUs'>CONTACT US</HashLink>
                    </div>
                    <div id="social-media">
                        <svg width="100" id="facebook" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXHashLink="http://www.w3.org/1999/xHashLink">
                            <path d="M99,50.304C99,22.515 76.621,0 49,0C21.379,0 -1,22.515 -1,50.304C-1,75.412 17.284,96.223 41.188,100L41.188,64.846L28.486,64.846L28.486,50.304L41.188,50.304L41.188,39.221C41.188,26.615 48.647,19.651 60.073,19.651C65.544,19.651 71.266,20.633 71.266,20.633L71.266,33.006L64.96,33.006C58.75,33.006 56.812,36.884 56.812,40.862L56.812,50.304L70.679,50.304L68.462,64.846L56.812,64.846L56.812,100C80.716,96.223 99,75.412 99,50.304Z" fill="#FFFFFF" />
                        </svg>
                        <svg width="102" id="instagram" height="100" viewBox="0 0 102 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXHashLink="http://www.w3.org/1999/xHashLink">
                            <path d="M51.011,24.361C36.823,24.361 25.378,35.808 25.378,50C25.378,64.192 36.823,75.639 51.011,75.639C65.2,75.639 76.644,64.192 76.644,50C76.644,35.808 65.2,24.361 51.011,24.361ZM51.011,66.669C41.842,66.669 34.346,59.193 34.346,50C34.346,40.807 41.82,33.331 51.011,33.331C60.202,33.331 67.676,40.807 67.676,50C67.676,59.193 60.18,66.669 51.011,66.669ZM83.672,23.313C83.672,26.637 80.994,29.293 77.693,29.293C74.369,29.293 71.714,26.615 71.714,23.313C71.714,20.01 74.391,17.332 77.693,17.332C80.994,17.332 83.672,20.01 83.672,23.313ZM100.649,29.382C100.269,21.371 98.44,14.275 92.573,8.429C86.728,2.583 79.634,0.753 71.625,0.351C63.37,-0.117 38.63,-0.117 30.375,0.351C22.389,0.731 15.294,2.561 9.427,8.407C3.56,14.253 1.753,21.349 1.351,29.36C0.883,37.616 0.883,62.362 1.351,70.618C1.731,78.629 3.56,85.725 9.427,91.571C15.294,97.417 22.366,99.247 30.375,99.649C38.63,100.117 63.37,100.117 71.625,99.649C79.634,99.269 86.728,97.439 92.573,91.571C98.418,85.725 100.247,78.629 100.649,70.618C101.117,62.362 101.117,37.638 100.649,29.382ZM89.985,79.477C88.245,83.85 84.876,87.22 80.481,88.982C73.9,91.593 58.284,90.991 51.011,90.991C43.738,90.991 28.1,91.571 21.541,88.982C17.168,87.242 13.8,83.873 12.037,79.477C9.427,72.894 10.03,57.274 10.03,50C10.03,42.726 9.45,27.084 12.037,20.523C13.777,16.15 17.146,12.78 21.541,11.018C28.122,8.407 43.738,9.009 51.011,9.009C58.284,9.009 73.922,8.429 80.481,11.018C84.854,12.758 88.223,16.127 89.985,20.523C92.595,27.106 91.993,42.726 91.993,50C91.993,57.274 92.595,72.916 89.985,79.477Z" fill="#FFFFFF" />
                        </svg>
                        <svg width="100" id="whats-app" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXHashLink="http://www.w3.org/1999/xHashLink">
                            <path d="M84.022,14.531C74.67,5.156 62.214,0 48.978,0C21.656,0 -0.576,22.232 -0.576,49.554C-0.576,58.281 1.701,66.808 6.031,74.33L-1,100L25.272,93.103C32.504,97.054 40.652,99.129 48.955,99.129L48.978,99.129C76.277,99.129 99,76.897 99,49.576C99,36.339 93.375,23.906 84.022,14.531ZM48.978,90.781C41.567,90.781 34.312,88.795 27.996,85.045L26.5,84.152L10.92,88.237L15.071,73.036L14.089,71.473C9.96,64.911 7.795,57.344 7.795,49.554C7.795,26.853 26.277,8.371 49,8.371C60.004,8.371 70.339,12.656 78.107,20.446C85.875,28.237 90.652,38.571 90.629,49.576C90.629,72.299 71.679,90.781 48.978,90.781ZM71.567,59.933C70.339,59.308 64.246,56.317 63.107,55.915C61.969,55.491 61.143,55.29 60.317,56.54C59.491,57.79 57.125,60.558 56.388,61.406C55.674,62.232 74.424,67.924 73.196,67.299C65.92,63.661 41.656,55.223 36.857,46.987C35.585,44.799 38.129,44.955 40.496,40.223C40.897,39.397 40.696,38.683 40.384,38.058C40.071,37.433 37.594,31.339 36.567,28.862C35.562,26.451 34.536,26.786 33.777,26.741C33.062,26.696 32.237,26.696 31.411,26.696C30.585,26.696 29.246,27.009 28.107,28.237C26.969,29.487 23.777,32.478 23.777,38.571C23.777,44.665 28.219,50.558 28.821,51.384C29.446,52.21 37.549,64.71 49.982,70.089C57.839,73.482 60.92,73.772 64.848,73.192C67.237,72.835 72.17,70.201 73.196,67.299C74.223,64.397 74.223,61.92 73.911,61.406C73.621,60.848 72.795,60.536 71.567,59.933Z" fill="#FFFFFF" />
                        </svg>
                        <svg width="100" id="call" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXHashLink="http://www.w3.org/1999/xHashLink">
                            <path d="M96.148,70.664L74.273,61.288C73.338,60.89 72.3,60.806 71.313,61.049C70.327,61.292 69.446,61.849 68.804,62.636L59.116,74.472C43.912,67.304 31.677,55.068 24.508,39.864L36.344,30.176C37.133,29.535 37.691,28.655 37.934,27.668C38.177,26.681 38.092,25.642 37.692,24.708L28.317,2.832C27.878,1.825 27.101,1.003 26.12,0.507C25.14,0.012 24.017,-0.126 22.946,0.117L2.633,4.805C1.6,5.043 0.678,5.625 0.019,6.455C-0.641,7.284 -1,8.313 -1,9.373C-1,59.472 39.606,100 89.627,100C90.687,100.001 91.716,99.642 92.546,98.982C93.377,98.322 93.958,97.4 94.197,96.367L98.885,76.054C99.126,74.978 98.986,73.851 98.486,72.867C97.987,71.883 97.16,71.104 96.148,70.664Z" fill="#FFFFFF" />
                        </svg>
                    </div>
                </div>
                </div>
            </>
        )
}