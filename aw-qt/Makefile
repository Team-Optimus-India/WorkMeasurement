.PHONY: build install test test-integration typecheck package clean

ifdef DEV
installcmd := poetry install
else
installcmd := pip3 install .
endif

build: aw_qt/resources.py
	$(installcmd)

install:
	bash scripts/config-autostart.sh

test:
	python3 -c 'import aw_qt'

test-integration:
	python3 ./tests/integration_tests.py --no-modules

typecheck:
	mypy aw_qt --ignore-missing-imports

precommit:
	make typecheck
	make test
	make test-integration

package:
	pyinstaller --clean --noconfirm --windowed aw-qt.spec

clean:
	rm -rf build dist
	rm -rf __pycache__ aw_qt/__pycache__

aw_qt/resources.py: aw_qt/resources.qrc
	pip install PyQt5
