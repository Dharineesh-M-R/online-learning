export default function userprofile({params}:any) {
    return (
        <div>
            <h1>Profile</h1>
            <hr />
            <p>Profile page {params.id}</p>
        </div>
    )
}