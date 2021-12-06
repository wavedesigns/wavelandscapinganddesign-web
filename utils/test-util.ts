/** Mock router function  */
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

export const pageRoutes = (currentPath: string) =>
  useRouter.mockImplementationOnce(() => ({
    asPath: currentPath,
  }))
