import "./features/playerdetection";


if (data.firsttime == true ) {
    ChatLib.chat("&c&lWARNING");
    ChatLib.chat("It seems like this is your first time loading the hamsburraclient chat triggers module. If you currently have other modules installed from the Mining QOL, please remove them and /ct load as not removing these modules can interfere with this module.");
    data.firsttime = false;
    data.save()
}

register("Command", (...args) => {
    if(args[0] == undefined) {
        ChatLib.chat('&b&m---------------------------------------')
        ChatLib.chat(prefix);
        ChatLib.chat('&b- &f/hamsburra - Opens the module GUI')
        ChatLib.chat('&b&m---------------------------------------')
    }
}).setName("Hamsburra")  