# Cleaning up benchmarks

We have noticed that sometimes we store empty benchmarks (should be solved now that we use the
upstream action). And if we don't clean-up anything, old benchmarks will stay in the JSON file
forever. In order to avoid this, you can use the `process.py` file.

To use this, run the file `bench/process.py` from the repository root. This will create a
`bench/data_processed.json` file. You will then just have to replace `bench/data.json` with the new
file.

While this is not very user friendly, it does the job, and hopefully we should just do it once in a
while to clean-up old benchmarks.
