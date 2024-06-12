import { useGetCompaniesQuery } from "../generated/graphql"

function CompaniesList1(): JSX.Element {
  const { loading, error, data } = useGetCompaniesQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      {data?.companies?.map((company) => (
        <div key={company?.id}>
          <p>
            {company?.name} <br /> {company?.contactPerson} <br />
          </p>
        </div>
      ))}
    </>
  )
}

export default CompaniesList1
