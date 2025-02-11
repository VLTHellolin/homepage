import { Icon } from '@iconify/react';
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Link } from '@nextui-org/link';
import { motion } from 'motion/react';

const HobbyChip = ({ text }: { text: string }) => {
  return (
    <Chip color='primary' size='sm' variant='flat'>
      {text}
    </Chip>
  );
};

const LongSocialButton = ({ href, icon, text }: { href: string; icon: string; text: string }) => {
  return (
    <Button
      className='min-w-10'
      as={Link}
      href={href}
      target='_blank'
      startContent={<Icon icon={icon} width={20} />}
      color='primary'
      variant='shadow'
      radius='lg'
    >
      <div className='hidden sm:block'>{text}</div>
    </Button>
  );
};

const SocialButton = ({ href, icon, size = 18 }: { href: string; icon: string; size?: number }) => {
  return (
    <Button className='opacity-90' isIconOnly as={Link} href={href} target='blank' color='default' variant='light' radius='sm' size='sm'>
      <Icon icon={icon} width={size} />
    </Button>
  );
};

export const IntroCard = () => {
  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}>
      <Card className='p-4'>
        <CardHeader className='justify-between'>
          <div className='flex gap-3'>
            <Avatar isBordered size='md' src='avatar.png' />
            <div className='flex flex-col justify-center items-start'>
              <h4 className='text-medium font-semibold text-default-600'>hellolin</h4>
              <h5 className='text-small text-default-500'>@VLTHellolin</h5>
            </div>
          </div>

          <LongSocialButton href='https://github.com/VLTHellolin' icon='simple-icons:github' text='GitHub' />
        </CardHeader>

        <CardBody className='text-small text-default-500'>
          A Frontend Developer, Competitive Programmer and UI/UX enthusiast from China.
          <div className='flex mt-2 gap-1'>
            <HobbyChip text='14 y.o.' />
            <HobbyChip text='He/Him' />
            <HobbyChip text='ENFP-T' />
            <HobbyChip text='ACG Lover' />
          </div>
        </CardBody>

        <CardFooter>
          <div className='flex gap-1 ml-auto'>
            <SocialButton href='mailto:i@hellolin.top' icon='material-symbols:mail-rounded' size={20} />
            <SocialButton href='https://x.com/VLTHellolin' icon='simple-icons:x' />
            <SocialButton href='https://t.me/VLTHellolin' icon='simple-icons:telegram' />
            <SocialButton href='https://www.zhihu.com/people/hellolin.cf' icon='simple-icons:zhihu' />
            <SocialButton href='https://steamcommunity.com/id/hellolin/' icon='simple-icons:steam' />
            <SocialButton href='https://discord.com/users/1060072430355370094' icon='simple-icons:discord' />
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
