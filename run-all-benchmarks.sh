#!/bin/bash
set -e

export TEST_TIMEOUT=900000  # 15 minutes/test

for test in benchmarks/test-*.js; do
	node "$test"
done
