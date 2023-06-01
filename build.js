const main = async () => {
    await import("./src/core/config/scripts/generateOpsIndex.js");
    await import("./src/core/config/scripts/generateConfig.js");
    await import("./src/node/config/scripts/generateNodeIndex.js");

};

main();
