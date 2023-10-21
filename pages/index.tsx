import { Paper,Container, Burger,Box,Title, Center,Timeline ,Image, Card, Avatar, Text, Group, Button,ActionIcon, rem  } from '@mantine/core';
import classes from './UserCardImage.module.css';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandTwitter, IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react';

export default function Index() {
	const [showPersonalInfo, setShowPersonalInfo] = useState(true);
  return (
    <>
    <HeaderSimple setShowPersonalInfo={setShowPersonalInfo} /> {/* ここでsetShowPersonalInfoをpropsとして渡す */}
		{showPersonalInfo ? <PersonalInfo/> : <Blogs/>}
    <FooterSocial/>
    </>
  );
}

function Blogs(){
	return (
		<>
		</>
	)
}

function PersonalInfo(){
	return (
	<Center>
    <Box ta="center" w={{ base: 400, sm: 800, lg: 1200 }}>
    <Card withBorder shadow="sm" padding="sm" radius="md">
      <Card.Section>
      <Image src="back.jpg" alt={"a"} h="auto"  />
      </Card.Section>
      <Avatar
        src="profile.jpg"
        size={150}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        Takafumi Miyanaga
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        Backend engineer
      </Text>
			<Group gap={0} className={classes.links} justify="center" wrap="nowrap">
          <ActionIcon component="a" href="https://twitter.com/orangekame3" size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" component="a" href ="https://github.com/orangekame3" color="gray" variant="subtle">
            <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
      </Group>
			<Sentence/>
      <Career/>
    </Card>
    </Box>
  </Center>
		)
}

function Sentence(){
	return(
		<Center>
		<Box my="xl" mx="xl" w="800">
      <Text>I am a backend engineer and an IT consultant. </Text>
			<Text>I have a keen interest in the societal implementation of quantum computing and am actively working on designing architectures that integrate it with cloud solutions.</Text>
			<Text>My preferred programming language is Go.</Text>
		</Box>
		</Center>
	)
}

function Career() {
  return (
    <>
    <Title my="xl" order={2}>Career</Title>
    <Center my="sm">
    <Timeline active={0}>
        <Timeline.Item title="Future Corp.">
				<Text c="dimmed" size="sm">
          Backend engineer and IT consultant
        </Text>
        <Text c="dimmed" size="sm">
          2021.04.01~now
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Tokyo University of Science">
				<Text c="dimmed" size="sm">
          Master degree @Tsai laboratory
        </Text>
        <Text c="dimmed" size="sm">
          2019.04.01~2021.03.18
        </Text>
      </Timeline.Item>
			<Timeline.Item title="Tokyo University of Science">
				<Text c="dimmed" size="sm">
          Bachelor degree @Physics
        </Text>
        <Text c="dimmed" size="sm">
          2015.04.01~2019.03.19
        </Text>
      </Timeline.Item>
    </Timeline>
    </Center>
    </>
  );
}

type HeaderSimpleProps = {
  setShowPersonalInfo: React.Dispatch<React.SetStateAction<boolean>>;
};

const links = [
  { link: '/', label: 'About' },
  { link: '/blogs', label: 'Blogs' },
];
export function HeaderSimple({ setShowPersonalInfo }: HeaderSimpleProps) {
	const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState('/');

  const items = links.map((link) => (
    <Button
      key={link.label}
      className={classes.link}
			style={{
				backgroundColor: active === link.link ? "#1D72FE" : "white",
				color: active === link.link ? "white" : "#1D72FE"
			}}
      onClick={() => {
        if (link.label === "About") {
          setShowPersonalInfo(true);  // ここで状態を変更
					setActive(link.link);
				} else if (link.label === "Blogs") {
          setShowPersonalInfo(false);  // ここで状態を変更
					setActive(link.link);
        }
      }}
    >
      {link.label}
    </Button>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Text c="dimmed" size="sm">
          Takafumi Miyanaga(@orangekame3)
        </Text>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
				{opened && (
        <div className={classes.menu}>
          {items}
        </div>
      )}
      </Container>
    </header>
  );
}

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text c="dimmed" size="sm">
          Takafumi Miyanaga(@orangekame3)
        </Text>
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon component="a" href="https://twitter.com/orangekame3" size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" component="a" href ="https://github.com/orangekame3" color="gray" variant="subtle">
            <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
