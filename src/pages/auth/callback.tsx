import { Alert, AlertIcon, Flex, CircularProgress } from '@chakra-ui/core'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Container from '~/components/Container'
import Layout from '~/components/Layout'
import { useGithubAuth } from '~/contexts/github-auth-provider'
import { obtainAccessToken } from '~/github-client'

interface Props {
  accessToken?: string
  errorMessage?: string
}

const AuthCallbackPage = ({ accessToken, errorMessage }: Props) => {
  const router = useRouter()
  const { setAccessToken } = useGithubAuth()

  useEffect(() => {
    setAccessToken(accessToken)
    if (accessToken) {
      router.replace('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout extraTitle="Authorizing on GitHub">
      {errorMessage ? (
        <Container>
          <Alert status="error">
            <AlertIcon />
            {errorMessage}
          </Alert>
        </Container>
      ) : (
        <Flex align="center" justify="center" p={5}>
          <CircularProgress
            isIndeterminate
            color="primary"
            trackColor="primary.500"
          />
        </Flex>
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let errorMessage = null
  let accessToken = null

  try {
    const { code } = context.query
    accessToken = await obtainAccessToken(code as string | undefined)
  } catch (e) {
    errorMessage = e.toString()
  }

  return { props: { errorMessage, accessToken } }
}

export default AuthCallbackPage
