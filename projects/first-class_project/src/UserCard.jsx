export function UserCard ({name, surname, isFollowing}) {
    return (
        <article className=".user-card">
            <div className=".user-card-data">
                <p className=".user-card-data-parrf"> {name}{surname} </p>
            </div>
            <button className="user-card-btnfollow">{isFollowing === "si" ? "Unfollow" : "Follow"}</button>
        </article>
    )
}