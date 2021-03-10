const components = {
  //Custom components
  HeroComponent: {
    parts: ["wrapper", "container", "navigation", "content", "buttons"],
    baseStyle: {
      wrapper: {
        bgPos: "center",
        bgRepeat: "no-repeat",
        w: "100%",
        height: 790,
        lineHeight: "taller",
      },
      container: {
        justifyContent: "center",
        flexDir: ["column", "column", "column", "row"],
        alignItems: "center",
      },
      cover: {
        marginLeft: [null, null, null, "10rem"],
        marginTop: ["2rem", "4rem", "6rem", "10rem"],
        width: ["21rem", "23rem", "27rem"],
      },

      content: {
        color: "whiteAlpha.900",
        w: ["20rem", "22rem", "25rem"],
        fontSize: ["md", "lg", "xl"],
      },
      formContainer: {
        maxWidth: 400,
        maxHeight: 380,
        marginRight: [null, null, null, "10rem"],
        alignSelf: "center",
      },
      formStack: {
        width: ["21rem", "23rem", "27rem"],
        p: "6",
        boxShadow: "lg",
        minHeight: 300,
        marginTop: ["2rem", "4rem", "6rem", "10rem"],
        bg: "whitesmoke",
        opacity: 0.8,
      },
      buttons: {
        fontWeight: "medium",
        lineHeight: "normal",
      },
    },
  },

  //Chakra components
  Heading: {
    baseStyle: {
      fontSize: "lg",
    },
  },
  Button: {
    baseStyle: {
      borderRadius: "0rem",
      _focus: {
        boxShadow: "",
      },
      _disabled: {
        opacity: 1.0,
      },
    },
    variants: {
      outline: {
        border: "1px solid",
        borderColor: "black",
        _hover: {
          bg: "#EDF2F7",
        },
      },
      solid: {
        bg: "black",
        _hover: {
          bg: "#2D3748",
        },
        color: "white",
      },
    },
    // The default size and variant values
    defaultProps: {
      size: "md",
      variant: "solid",
    },
  },
  Menu: {
    baseStyle: {
      list: {
        borderRadius: "0rem",
        minW: "3xl",
        py: "0",
        _focus: {
          boxShadow: "",
        },
      },
    },
  },
  Input: {
    baseStyle: {
      outline: "1px",
      border: "1px solid",
      borderColor: "#2D3748",
      borderRadius: "0rem",
    },
    variants: {
      outline: {
        field: {
          border: "1px solid",
          borderColor: "gray.400",
          borderRadius: "0rem",
          _hover: {
            borderColor: "gray.700",
          },
        },
      },
    },
  },
  Tabs: {
    variants: {
      outline: {
        tab: {
          _focus: { boxShadow: "" },
          _selected: { border: "1px" },
        },
      },
    },
  },
  Link: {
    baseStyle: {
      color: "white",
      _hover: {
        textDecoration: "none",
      },
      _focus: {
        boxShadow: "none",
      },
    },
  },
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {},
}

export default components
