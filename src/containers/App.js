import React, {Component} from 'react';
import CardsList from "../components/CardsList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";


class App extends Component{
    constructor() {
        //super is needed to use this
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({robots: users})
            })

    }

    onSearchChange = (event)  => {
        this.setState({searchfield : event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if(this.state.robots.length === 0){
            return <h1 className="tc">Loading ...</h1>
        }
        else {
            return (
                <div className="tc">
                    <h1 className='f1'> RoboFriends </h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardsList robots = {filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>

            );
        }
    }
}

export default App;
