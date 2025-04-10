module.exports = {
  
    getParams(req, params){

        return Object.assign({}, {
            menus: req.menus,
            user: req.session.user
        }, params);

    },

    getMenus(req){

        let menus =  [
            {
                text: "Tela inicial",
                href: "/admin/",
                icon: "home",
                active:false
            },
            {
                text: "Menu",
                href: "/admin/menus",
                icon: "cutlery",
                active:false
            },
            {
                text: "Reservas",
                href: "/admin/reservations",
                icon: "calender-check-o",
                active:false
            },
            {
                text: "Contatos",
                href: "/admin/contacts",
                icon: "comments",
                active:false
            },
            {
                text: "Usuários",
                href: "/admin/users",
                icon: "users",
                active:false
            },
            {
                text: "E-mails",
                href: "/admin/emails",
                icon: "envelope",
                active:false
            },
        ];

    menus.map(menus =>{

      if (menus.href === `/admin${req.url}`) menus.active = true;

    });

        return menus;

    }
};