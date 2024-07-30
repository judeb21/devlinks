import { PlatformTypes } from "@/types/platform";

import GithubLogo from '../../public/Icons/github-logo-fill.svg';
import TwitterLogo from '../../public/Icons/twitter-logo-fill.svg';
import MentorLogo from '../../public/Icons/mentor-logo-fill.svg';
import LinkedinLogo from '../../public/Icons/linkedin-logo-fill.svg';
import YoutubeLogo from '../../public/Icons/youtube-logo-fill.svg';
import FacebookLogo from '../../public/Icons/facebook-logo-fill.svg';
import TwitchLogo from '../../public/Icons/twitch-logo-fill.svg';
import DevToLogo from '../../public/Icons/dev-logo-fill.svg';
import CodewarLogo from '../../public/Icons/codewars-logo-fill.svg';
import CodepenLogo from '../../public/Icons/codepen-logo-fill.svg';
import FreeCodeCampLogo from '../../public/Icons/freecodecamp-logo-fill.svg';
import GitLabLogo from '../../public/Icons/gitlab-logo-fill.svg';
import HashnodeLogo from '../../public/Icons/hashnode-logo-fill.svg';
import StackOverflowLogo from '../../public/Icons/stackoverflow-logo-fill.svg';

export const platforms: Array<PlatformTypes> = [
  {
    name: "GitHub",
    value: "github",
    iconName: GithubLogo
  },
  {
    name: "Frontend Mentor",
    value: "frontendmentor",
    iconName: MentorLogo
  },
  {
    name: "Twitter",
    value: "twitter",
    iconName: TwitterLogo
  },
  {
    name: "LinkedIn",
    value: "linkedin",
    iconName: LinkedinLogo
  },
  {
    name: "YouTube",
    value: "youtube",
    iconName: YoutubeLogo
  },
  {
    name: "Facebook",
    value: "facebook",
    iconName: FacebookLogo
  },
  {
    name: "Twitch",
    value: "twitch",
    iconName: TwitchLogo
  },
  {
    name: "Dev.to",
    value: "dev.to",
    iconName: DevToLogo
  },
  {
    name: "Codewars",
    value: "codewars",
    iconName: CodewarLogo
  },
  {
    name: "Codepen",
    value: "codepen",
    iconName: CodepenLogo
  },
  {
    name: "freeCodeCamp",
    value: "freecodecamp",
    iconName: FreeCodeCampLogo
  },
  {
    name: "gitlab",
    value: "gitlab",
    iconName: GitLabLogo
  },
  {
    name: "Hashnode",
    value: "hashnode",
    iconName: HashnodeLogo
  },
  {
    name: "Stack Overflow",
    value: "stack",
    iconName: StackOverflowLogo
  },
]
