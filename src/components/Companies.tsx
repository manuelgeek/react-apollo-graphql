import {gql, useQuery} from "@apollo/client";

interface Company {
  id: number,
  name: string,
  bio: string
}

interface Companies {
  companies: Company[]
}

const Companies = gql`
    query Companies {
        companies {
            bio
            name
            id
        }
    }
`;

function CompaniesList(): JSX.Element {
  const { loading, error, data } = useQuery<Companies>(Companies);

  if (loading) return<p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <>{ data?.companies.map(({ id, bio, name }) => (
    <div key={id}>
      <p>
        {name} <br/> {bio} <br/>
      </p>
    </div>
  ))
  }</>
}

export default CompaniesList
