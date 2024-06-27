// Importing necessary components from react-router-dom
import { Route, Redirect } from 'react-router-dom'

// Defining the PrivateRoute component
const PrivateRoute = ({ children, ...rest }) => {
    // Simulating authentication status
    let auth = { 'token': false }
    console.log(auth.token,"ttttt")

    return (
        // Rendering a Route component with spread props
        <Route {...rest}>
            {/* Conditional rendering based on authentication status */}
            {!auth.token ?
                // If not authenticated, redirect to login page
                <Redirect to="/login" />
                :
                // If authenticated, render child components
                children
            }
        </Route>
    )
}

export default PrivateRoute;
