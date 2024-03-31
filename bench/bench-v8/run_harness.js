/* run_harness.js */
var print = console.log;

function Run() {
  BenchmarkSuite.RunSuites({
    NotifyStep: ShowProgress,
    NotifyError: AddError,
    NotifyResult: AddResult,
    NotifyScore: AddScore,
  });
}

var harnessErrorCount = 0;

function ShowProgress(name) {
  // print("PROGRESS", name);
}

function AddError(name, error) {
  print("ERROR", name, error);
  print(error.stack);
  harnessErrorCount++;
}

function AddResult(name, result) {
  // print("RESULT", name, result);
  // Print result in JSON format
  print('  "' + name + '":' + result + ",");
}

function AddScore(score) {
  print('  "score": ' + score + ",");
  print("}");
}

try {
  print("{");
  Run();
} catch (e) {
  print("*** Run() failed");
  print(e.stack || e);
}

if (harnessErrorCount > 0) {
  // Throw an error so that 'duk' has a non-zero exit code which helps
  // automatic testing.
  throw new Error("Benchmark had " + harnessErrorCount + " errors");
}
