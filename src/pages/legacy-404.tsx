import { Link } from '@chakra-ui/next-js'
import {
	Heading,
	Stack,
	VStack,
	Text,
	Button,
	Container,
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { NextSeo } from 'next-seo'

import mascotIcon from '@app-public/mascot-icon.png'
import Layout from '~/components/Layout'

const Custom404 = () => (
	<Layout>
		<NextSeo title="Not Found" />
		<Container variant="fluid" pb={{ base: 8, lg: 16 }}>
			<VStack px="10">
				<Image src={mascotIcon} alt="" width={250} height={250} />
				<Stack
					shouldWrapChildren
					alignItems="center"
					spacing="2"
					flexGrow={1}
					flexBasis={0}
				>
					<Heading
						as="h2"
						color="primaryText"
						fontSize="4xl"
						fontWeight="black"
						letterSpacing="tight"
					>
						This page could not be found.
					</Heading>
					<Text as="p" color="secondaryText" fontSize="2xl" fontWeight="black">
						Octoclairvoyant cannot divine the page you wanted.
					</Text>
				</Stack>
			</VStack>
			<VStack mt={12} spacing={5}>
				<NextLink href="/comparator" passHref legacyBehavior>
					<Button as="a" variant="cta">
						Go to comparator
					</Button>
				</NextLink>

				<Link href="/" fontWeight="black">
					Or go to homepage
				</Link>
			</VStack>
		</Container>
	</Layout>
)

export default Custom404