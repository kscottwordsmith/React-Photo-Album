import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
    state = {
        albums: []
    }
    
    componentDidMount() {
        axios.get("http://localhost:3001/albums").then(resp => {
            this.setState({
                albums: resp.data
            })
        })
    }

    render() {
        let displayAlbums = this.state.albums.map((alb, i) => (
            <div key={"album" + i} className="album">
                <img src={alb.coverPhoto} />
                {alb.name}
            </div>
        ))

        return (
            <div>
                {displayAlbums}
            </div>
        )
    }
}

export default Home