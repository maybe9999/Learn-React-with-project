export function UserCard (name, surname, isFollowing) {
    return (
        <article className="">
            <div>
                <strong>{name}</strong>
                <strong>{surname}</strong>
            </div>
            <button>{isFollowing}</button>
        </article>
    )
}