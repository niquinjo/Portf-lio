import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

export function SocialLinks() {
  return (
    <div className="flex justify-center gap-4 my-15">
      <SocialIcon
        href="https://github.com/niquinjo"
        label="GitHub"
        icon={<Github size={20} />}
      />

      <SocialIcon
        href="https://www.instagram.com/niquinjo.dev/"
        label="Instagram"
        icon={<Instagram size={20} />}
      />

      <SocialIcon
        href="https://www.linkedin.com/in/niquinjo/"
        label="LinkedIn"
        icon={<Linkedin size={20} />}
      />

      <SocialIcon
        href="https://wa.me/5584981533786"
        label="WhatsApp"
        icon={<Phone size={20} />}
      />

      <SocialIcon
        href="mailto:niquinjo.dev@gmail.com"
        label="Email"
        icon={<Mail size={20} />}
      />
    </div>
  );
}

type SocialIconProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

function SocialIcon({ href, label, icon }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        flex items-center justify-center
        w-10 h-10
        rounded-md
        bg-black
        text-white
        border border-white/10
        hover:bg-white hover:text-black
        transition-colors
      "
    >
      {icon}
    </a>
  );
}
