import { Container, Burger,Box,Title, Center,Timeline ,Image, Card, Avatar, Text, Group, Button,ActionIcon, rem  } from '@mantine/core';
import classes from './UserCardImage.module.css';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { IconBrandTwitter, IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react';

export default function UserCardImage() {
  return (
    <>
    <HeaderSimple/>
    <Center>
    <Box ta="center" w={{ base: 700, sm: 1000, lg: 1200 }}>
			This page is underconstruction
    </Box>
    </Center>
    <FooterSocial/>
    </>
  );
}

const links = [
  { link: '/', label: 'About' },
  { link: '/blogs', label: 'Blogs' },
];
export function HeaderSimple() {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(router.pathname);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        //event.preventDefault();
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
