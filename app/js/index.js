const p = new Poppy();
p.warn("This should be a warning message");
p.primary("This is a primary");
p.error("This is an error");
p.danger("This is danger");
p.success("This is success");

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    p.primary(`This is a primary ${i*1000}`);
  }, i * 1000);
}