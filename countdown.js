let countdown = 60;
while (countdown >= 0) {
  if (countdown === 60) {
    console.log(countdown + ": One Minute to Liftoff.");
  } else if (countdown > 10) {
    console.log(countdown + ": All Systems Green.");
  } else if (countdown > 5) {
    console.log(countdown + ": Starting Ignition Sequence.");
  } else if (countdown > 2) {
    console.log(countdown + ": Ignition Complete.");
  } else if (countdown > 0) {
    console.log(countdown + ": Full Power.");
  } else {
    console.log(countdown + ": Liftoff!");
  }
  countdown--;
}
