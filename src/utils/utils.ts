
/**
 * Get the username initials and shortname
 * @param { string } username - signed in username
 * @returns { Object }
 */
export const formatUserName = (username: string) => {
    if (username) {
      const splitString = username.split(" ");
      const userShortName = splitString[0] + " " + splitString[1].charAt(0) + '.';
      const userInitials = splitString[0].charAt(0) + splitString[1].charAt(0);
      return { userShortName, userInitials };
    }
  };
  
  /**
   * Get the active link
   * @param { string }  - url
   * @param { string }  - test url
   * @returns {boolean}
   */
  export const getActiveUrl = (data: string) => {
    let activeLink;
    let url = window.location.href;
    if (url?.includes(data)) {
      activeLink = true;
    }
  
    return activeLink;
  };

  /**
 * Only numbers and decimal input
 * @param { string } e - the number arg
 * @returns { String }
 */
export const onlyNumberInput = (e: any) => {
    let inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      return inputValue;
    }
  };
 
/**
 * Custom Grid Component styling
 * header color - primary-color
 */
export const customGridStyles:any = {
    // rows: {
    //   style: {
    //     minHeight: "48px",
    //     fontSize: "12px",
    //     fontWeight: 500,
  
    //     lineHeight: "16px",
    //     textTransform: "uppercase",
    //     "&:not(:last-of-type)": {
    //       borderBottomStyle: "solid",
    //       borderBottomWidth: "1px",
    //       borderBottomColor: "#ffffff",
    //     },
    //   },
    // },
  
    headCells: {
      style: {
        height: '40px',
        lineHeight: "26px",
        fontSize: "12px",
        fontWeight: 500,
        fontFamily: "Avenir",
       
        // textTransform: "uppercase",
      },
    },
    headRow: {
      style: {
        // color: "#ffffff",
        // backgroundColor: "#004987",
        // border: "1px solid #004987",
        // borderRadius: "5px 5px 5px 5px",
      },
    },
  };