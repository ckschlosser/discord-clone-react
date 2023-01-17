# Landing Page Clone of Discord with React/Tailwind CSS

## A fully functional Discord Clone showcasing experience in design, responsiveness, and attention to detail!

This project is a clone of the landing page for [Discord](https://discord.com/). The project is slightly off because discord uses their own font style that is not available to the public yet. This project shows how to do the following:

- Create a fully functional and responsive Discord Clone
- Use of Side Navigation with additional sidebars
- Using animations for the mobile navigation
- Use of multiple background images at different breakpoints

## Skills used in project

- HTML5
- Tailwind CSS
- JavaScript
- Reactjs

## Some of the code I am proud of

This code shows how to create a useState for a mobile navigation. In the code you will also see when the mobile nav is open the overflow is hidden which disables the site to scroll but lets the nav scroll if needed.

```SvelteKit
const [showMenu, setShowMenu] = useState(false);

  showMenu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  let menu;
  let menuMask;
  let close;

  if (showMenu) {
    menu = <MobileNav />;
    menuMask = (
      <div
        className="z-50 top-0 left-0 bg-black/30 w-full h-full fixed"
        onClick={() => setShowMenu(false)}
      ></div>
    );
    close = (
      <button
        className="fixed top-0 right-0 m-6 z-[100]"
        onClick={() => setShowMenu(false)}
      >
        <CloseX />
      </button>
    );
  }
```

# Vists the [Discord Clone](https://discord-clone-react-livid.vercel.app/)

The application is host on vercel.
