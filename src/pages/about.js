// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
    const [counter, setCounter] = React.useState(0);

    function increaseCounter() {
        setCounter(counter + 1);
    }

    return (
        <main>
            <Layout pageTitle="Home Page">
                <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
                <p>Check this out!</p>
                <button onClick={increaseCounter}>Click here</button>
                <div>you've clicked the button {counter} times</div>
            </Layout>
        </main>
    )
}

// Step 3: Export your component
export default AboutPage