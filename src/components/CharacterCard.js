import React from "react"

const CharacterCard = ({character}) => {
    return (
        <div className="rounded-xl overflow-hidden" style={{backgroundColor: 'rgb(78, 174, 200, 0.7)'}}>
            <div className="">
                <img src={character.image} alt={character.name} className="w-full object-cover"/>
            </div>
            <div className="p-2">
                <h1 className="">{character.name}</h1>
            </div>
        </div>
    )
}

export default CharacterCard