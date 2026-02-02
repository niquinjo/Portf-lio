
export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-8">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">

        <p className="text-sm text-white/80 text-center">
          © {new Date().getFullYear()} <a href="https://www.instagram.com/niquinjo/">@niquinjo</a>
          <br />
          Desenvolvido com Next.js, Tailwind e shadcn/ui.
        </p>
      </div>
    </footer>
  );
}
