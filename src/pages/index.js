import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Header from "../components/Header"
import CharacterList from "../components/CharacterList"

const IndexPage = () => {
    const characters = useStaticQuery(graphql`
    query {
      ram {
        characters {
            results {
                id
                name
                image
                status
            }
        }
      }
    }
    `);

    return (
        <div className="min-h-screen bg-gray-800 px-6 pb-6">
            <Header/>
            <CharacterList characters={characters.ram.characters.results}/>
        </div>
    )
}

export default IndexPage