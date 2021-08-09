RegisterCommand("dv", async (source, args) => {
    let vehicle = GetVehiclePedIsIn(GetPlayerPed(-1), false);
    if (vehicle != 0) {
        DeleteVehicle(vehicle);
        emit('chat:addMessage', {
            args: [`^2Woohoo! Your vehicle is now gone!`]
        });
    } else {
        const [playerX, playerY, playerZ] = GetEntityCoords(GetPlayerPed(-1));
        let nearestVehicle = GetClosestVehicle(playerX, playerY, playerZ, 10, 0, 70);
        if (nearestVehicle != 0) {
            DeleteVehicle(nearestVehicle);
            emit('chat:addMessage', {
                args: [`^2Woohoo! Your vehicle is now gone!`]
            });
        } else {
            emit('chat:addMessage', {
                args: [`^1Boohoo! I did nothing!`]
            });
        }
    }
})