import { Container, Burger,Box,Title, Center,Timeline ,Image, Card, Avatar, Text, Group, Button,ActionIcon, rem  } from '@mantine/core';
import classes from './UserCardImage.module.css';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandTwitter, IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react';

export default function UserCardImage() {
  return (
    <>
    <HeaderSimple/>
    <Center>
    <Box ta="center" w={{ base: 700, sm: 1000, lg: 1200 }}>
    <Card withBorder shadow="sm" padding="sm" radius="md">
      <Card.Section inheritPadding>
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
      <Demo/>
    </Card>
    
    </Box>
    </Center>
    <FooterSocial/>
    </>
  );
}

function Demo() {
  return (
    <>
    <Title order={2}>Career</Title>
    <Center>
    <Timeline align="left" active={0}>
        <Timeline.Item title="Future Corp.">
        <Text c="dimmed" size="sm">
          2021.04.01~now
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Tokyo University of Science">
        <Text c="dimmed" size="sm">
          2019.04.21~2021.03
        </Text>
      </Timeline.Item>
    </Timeline>
    </Center>
    </>
  );
}


const links = [
  { link: '/index', label: 'About' },
  { link: '/blogs', label: 'Blogs' },
];
export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
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
          <ActionIcon  href="https://twitter.com/orangekame3" size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" href ="https://github.com/orangekame3" color="gray" variant="subtle">
            <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}