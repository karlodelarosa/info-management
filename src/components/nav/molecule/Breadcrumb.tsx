import { Link, useLocation } from 'react-router-dom'

function Breadcrumb() {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((path) => path)

  const breadcrumbs = pathnames.map((path, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
    const isLast = index === pathnames.length - 1

    return (
      <li
        key={path}
        className={`flex items-center capitalize ${isLast ? 'text-gray-700' : 'text-blue-600'}`}
      >
        {!isLast ? (
          <>
            <Link to={routeTo} className="text-sm font-medium hover:text-blue-600">
              {path}
            </Link>
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-1 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </>
        ) : (
          <span className="text-sm font-medium">{path}</span>
        )}
      </li>
    )
  })

  return (
    <nav className="flex pb-2" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">{breadcrumbs}</ol>
    </nav>
  )
}

export default Breadcrumb
