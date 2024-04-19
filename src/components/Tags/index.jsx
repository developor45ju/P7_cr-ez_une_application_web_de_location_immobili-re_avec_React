function Tag({tags}) {  
    return (
        <div className="tag__container">
            {tags.map((tag, index) => (
                <div key={index} className="tag__coontainer-card">{tag}</div>
            ))}
        </div>
    )
}

export default Tag;