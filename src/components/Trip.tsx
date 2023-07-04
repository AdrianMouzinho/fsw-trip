export async function Trip() {
  const data = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: {
      revalidate: 0,
    },
  }).then((res) => res.json())

  return (
    <div>
      <h1>Trip</h1>
      <ul>
        {data.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
